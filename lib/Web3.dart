import 'dart:convert';
import 'package:flutter/material.dart';


stablecoin now_coin = stablecoin.JPYC;

chain now_chain = chain.KAIA;

String userAddress="";

final ValueNotifier<String?> addressNotifier =
ValueNotifier(null);

enum stablecoin{
  JPYC('JPYC','0xE7C3D8C9a439feDe00D2600032D5dB0Be71C3c29',18),
  IDRP('IDRP','0xc16d986585407a74ab87d17c3d0dc19822e3eb35',6);

  final String Name;
  final String Address;
  final int Decimal;

  const stablecoin(this.Name, this.Address, this.Decimal);

  void Changecoin(){
    now_coin = this;
  }

}

enum chain{
  Polygon('Polygon', 137),
  KAIA('KAIA', 8217);

  final String Name;
  final int Id;

  const chain(this.Name, this.Id);
}

String Checkname(String address){
  for (var coin in stablecoin.values){
    if(coin.Address == address){
      return coin.Name;
    }
  }
  return 'Undefined Stable Coin';
}

String maskMiddle(String text, {int head = 6, int tail = 6}) {
  if (text.length <= head + tail) {
    return text; // 短すぎる場合はそのまま
  }
  return text.substring(0, head) +
      '...' +
      text.substring(text.length - tail);
}

enum UriCheckError {
  notEVMUri,
  differentNetwork,
  invalidToken,
  invalidFormat,
  invalidDecimal,
  invalidFunction,
}

String errorMessage(UriCheckError e) {
  switch (e) {
    case UriCheckError.notEVMUri:
      return 'Not ERC-681 Recipt';
    case UriCheckError.differentNetwork:
      return 'Another Network';
    case UriCheckError.invalidToken:
      return 'Not enlisted StableCoin';
    case UriCheckError.invalidFormat:
      return 'Invalid URI';
    case UriCheckError.invalidDecimal:
      return 'Invalid Digits';
    case UriCheckError.invalidFunction:
      return 'Unsupported Function';
  }
}

String filltag(String tag) {
  List<String> tags = [tag.substring(4*0,4*1),tag.substring(4*1,4*2),tag.substring(4*2,4*3),tag.substring(4*3,4*4)];
  return '${tags[0]} - ${tags[1]} - ${tags[2]} - ${tags[3]}';
}

UriCheckError? validateRawUri(String uri) {

  try {
    final req = parseErc681(uri);
    if (!uri.startsWith('ethereum:')) {
      return UriCheckError.notEVMUri;
    }

    if (req.chainId != 8217) {
      return UriCheckError.differentNetwork;
    }

    if (Checkname(req.token) == 'Undefined Stable Coin') {
      return UriCheckError.invalidToken;
    }

    if (!isValid18Decimals(req.amount)) {
      return UriCheckError.invalidDecimal;
    }

    if (req.function != "transfer") {
      return UriCheckError.invalidFunction;
    }
  }catch(e){
    return UriCheckError.invalidFormat;
  }

  return null; // OK
}

bool isValid18Decimals(BigInt amount) {
  final base = BigInt.from(10).pow(now_coin.Decimal);
  return amount % base == BigInt.zero;
}

String buildErc20TransferData(String to, BigInt amount) {
  // function selector
  final methodId = 'a9059cbb';

  // address（20byte → 32byte）
  final toClean = to.replaceFirst('0x', '');
  final toPadded = toClean.padLeft(64, '0');

  // amount（uint256 → 32byte）
  final amountHex = amount.toRadixString(16);
  final amountPadded = amountHex.padLeft(64, '0');

  String dat = '0x$methodId$toPadded$amountPadded';

  return dat;
}

String toHex(String tag) {
  final bytes = utf8.encode(tag);   // 文字列 → バイト列
  final hex = bytes
      .map((b) => b.toRadixString(16).padLeft(2, '0'))
      .join();
  return hex.padRight(64,'0');
}


Map<String, dynamic> buildTransaction({
  required String from,
  required String tokenAddress,
  required String to,
  required BigInt amount,
}) {
  final data = buildErc20TransferData(to, amount);

  return {
    "from": from,
    "to": tokenAddress,
    "data": data,
    "value": "0x0",
    "chainId": "0x${now_chain.Id.toRadixString(16)}",
    'gas': '0x493E0', // 1,000,000（送金のみならこれくらい）
    // 'gasPrice' ではなく、こちらを指定すると計算が早まる場合があります
    'maxFeePerGas': '0x746A528800', // 500 Gwei (環境に合わせて調整)
    'maxPriorityFeePerGas': '0x746A528800', // 500 Gwei
  };
}


class Erc681Request {
  final String token;
  final int chainId;
  final String function;
  final String to;
  final BigInt amount;

  Erc681Request({
    required this.token,
    required this.chainId,
    required this.function,
    required this.to,
    required this.amount,
  });

}

Erc681Request parseErc681(String uri) {
  final noScheme = uri.replaceFirst('ethereum:', '');

  final parts = noScheme.split('?');
  final path = parts[0];
  final query = Uri.splitQueryString(parts[1]);

  // 0x...@137/transfer
  final pathParts = path.split('/');
  final addressAndChain = pathParts[0];
  final function = pathParts[1];

  final addrSplit = addressAndChain.split('@');

  final token = addrSplit[0];
  final chainId = int.parse(addrSplit[1]);

  final to = query['address']!;
  final amount = parseScientific(query['uint256']!);

  return Erc681Request(
      token: token,
      chainId: chainId,
      function: function,
      to: to,
      amount: amount,
  );
}

BigInt parseScientific(String input) {
  if (!input.contains('e')) {
    return BigInt.parse(input);
  }

  final parts = input.split('e');
  final base = BigInt.parse(parts[0]);
  final exponent = int.parse(parts[1]);

  return base * BigInt.from(10).pow(exponent);
}

String ShowAmount(BigInt Amount, int Div){
  final s = Amount.toString().padLeft(Div + 1, '0');

  var integer = s.substring(0, s.length - Div);
  var decimal = s.substring(s.length - Div);

  // 末尾ゼロ削除
  decimal = decimal.replaceFirst(RegExp(r'0+$'), '');

  // 先頭ゼロ削除（重要）
  integer = integer.replaceFirst(RegExp(r'^0+'), '');
  if (integer.isEmpty) integer = '0';

  return decimal.isEmpty ? integer : '$integer.$decimal';
}
