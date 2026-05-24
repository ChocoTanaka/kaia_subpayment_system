import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'package:web/web.dart' as web;

// JavaScriptのプロバイダオブジェクトの構造を定義
@JS()
@anonymous
extension type EthereumProvider._(JSObject _) implements JSObject {
  // eip-1193に準拠したrequestメソッドの定義
  external JSPromise<JSAny> request(RequestArguments args);
}

@JS()
@anonymous
extension type RequestArguments._(JSObject _) implements JSObject {
  external factory RequestArguments({required JSString method, JSArray<JSAny>? params});
}

// ブラウザ環境からプロバイダを取得
// 戻り値の型を (EthereumProvider, String) のペアにする
(EthereumProvider, String)? get _providerWithDetails {
  final windowJS = web.window as JSObject;

  // 1. まず 'kaia' をチェック
  if (windowJS.hasProperty('kaia'.toJS).toDart) {
    final provider = windowJS.getProperty<EthereumProvider>('kaia'.toJS);
    return (provider, 'window.kaia');
  }
  // 2. 次に 'ethereum' をチェック
  else if (windowJS.hasProperty('ethereum'.toJS).toDart) {
    final provider = windowJS.getProperty<EthereumProvider>('ethereum'.toJS);
    return (provider, 'window.ethereum');
  }

  return null;
}

// 1. ウォレット接続（アカウント要求）
Future<String> connectWallet_KAIA() async {
  // レコードで（プロバイダ, 名前）を受け取る
  final details = _providerWithDetails;

  if (details == null) {
    print("❌ ウォレットプロバイダが見つかりません。");
    return "";
  }

  final (p, providerName) = details; // 分割代入
  print(providerName);
  try {
    // Kaiaチェーンの規格に合わせて kaia_requestAccounts を要求
    final args = RequestArguments(method: 'kaia_requestAccounts'.toJS);
    final JSAny response = await p.request(args).toDart;

    // 返り値はアドレスの配列（JSArray）
    final JSArray<JSString> addresses = response as JSArray<JSString>;
    return addresses.toDart.first.toDart;
  } catch (e) {
    print("接続エラー: ${e.toString()}");
    return "";
  }
}

// 2. ステーブルコイン等の送金（簡易トランザクション）
Future<String?> sendTransaction(Map<String, dynamic> tx) async {
  // レコードで（プロバイダ, 名前）を受け取る
  final details = _providerWithDetails;
  if (details == null) {
    print("❌ ウォレットプロバイダが見つかりません。");
    return "";
  }
  final (p, providerName) = details; // 分割代入
  final jsTx = tx.jsify()!;
  try {
    final param = JSArray<JSAny>()..add(jsTx);
    final args = RequestArguments(method: 'kaia_sendTransaction'.toJS, params: param);

    final JSAny txHash = await p.request(args).toDart;
    return (txHash as JSString).toDart;
  } catch (e) {
    print("送金エラー: ${e.toString()}");
    return null;
  }
}