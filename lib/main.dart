import 'package:flutter/material.dart';
import 'package:kaia_subpayment_system/Connect.dart';
import 'Page1.dart';
import 'Page2.dart';
import 'Web3.dart';
import 'dart:js_interop';
import 'Connect.dart';

// JSの関数を定義
@JS('connectWallet')
external JSPromise<JSString?> _connectWallet();

@JS('connectTargetWallet')
external JSPromise<JSString> jsConnectTargetWallet(JSString rdns);

void main() {
  runApp(const MPSs());
}

class MPSs extends StatelessWidget {
  const MPSs({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'KAIA Stablecoin Sub-Payment System',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.white38),
      ),
      home: const MPSs_Stateful(title: 'KAIA Payment Sub-system'),
    );
  }
}


class MPSs_Stateful extends StatefulWidget {
  const MPSs_Stateful({super.key, required this.title});


  final String title;

  @override
  State<MPSs_Stateful> createState() => MPSs_Home();
}

class MPSs_Home extends State<MPSs_Stateful>{
  int _selectedIndex = 0;

  List<WalletModel> _wallets = [];

  final ScrollController _scrollController = ScrollController();

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  // ウォレットのリアルタイムスキャンを実行
  Future _scanAvailableWallets() async {
    try {
      final JSArray<JSWalletInfo> jsList = await jsGetAvailableWallets().toDart;
      final List<WalletModel> dartList = jsList.toDart.map((jsWallet) {
        return WalletModel(
          name: jsWallet.name.toDart,
          rdns: jsWallet.rdns.toDart,
          iconDataUrl: jsWallet.icon.toDart,
        );
      }).toList();
      _wallets = dartList;

    } catch (e) {
      print("Scan Error: $e");
    }
  }

  // 選ばれたウォレットに接続
  Future _selectAndConnect(String rdns) async {
    try {
      final JSString jsAddress = await jsConnectSelectedWallet(rdns.toJS).toDart;

      print("Address: ${jsAddress.toDart}");
      // ここからステーブルコイン決済の画面へ遷移させる
    } catch (e) {
      print("接続失敗: $e");
    }
  }

  Future<void> CheckWallets(BuildContext context) async {
    await showDialog(context: context, builder: (BuildContext context) {
      return AlertDialog(
        title: const Text(
          'Wallet Check',
          style: TextStyle(
            fontSize: 22,
          ),
        ),
          content: SizedBox(
              width: 300,
              height: 250,
              child: Column(
                children : [
                  Expanded(
                    child:  _wallets.length > 1 ?
                      Scrollbar(
                      controller: _scrollController,
                      child: SingleChildScrollView(
                        controller: _scrollController,
                        child: Expanded(
                          child: ListView.builder(
                            shrinkWrap: true, // 追加
                            physics: NeverScrollableScrollPhysics(), // 追加
                            itemCount: _wallets.length,
                            itemBuilder: (context, index) {
                              final wallet = _wallets[index];
                              return ListTile(
                                // EIP-6963仕様：wallet.iconDataUrlにはウォレットのロゴ画像（base64）が入っているので、Image.network等でそのままアイコン表示も可能
                                  title: Text(wallet.name),
                                  subtitle: Text(wallet.rdns), // 例: 'me.unifi'
                                  trailing: Icon(Icons.chevron_right),
                                  onTap: () {
                                    _selectAndConnect(wallet.rdns);
                                    Navigator.pop(context);
                                  }
                              );
                            },
                          )
                        ),
                      ),
                    ): SizedBox(),
                  ),
                ]
              ),
          ),
          actions: <Widget>[
            GestureDetector(
              child: const Text(
                'Cancel',
                style: TextStyle(
                  fontSize: 20,
                ),
              ),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ]
      );
    });

  }
  @override
  initState() {
    super.initState();

    addressNotifier.addListener(_handleAppKitUpdate);
  }

  // 通知が来たら呼ばれる関数
  void _handleAppKitUpdate() {
    if (mounted) {
      setState(() {
      });
    }
  }

  Future<void> connectWeb3() async {
    try {
      // JSの関数を呼び出し（PromiseをawaitするためにtoDartを使用）
      final JSString? result = await _connectWallet().toDart;

      if (result != null) {
        final String address = result.toDart;
        if (address == "NOT_INSTALLED") {
          print("MetaMaskが見つかりません");
        } else {
          addressNotifier.value = address;
        }
      }
    } catch (e) {
      print("JS Interop Error: $e");
    }
  }

  @override
  void dispose() {
    addressNotifier.removeListener(_handleAppKitUpdate); // メモリリーク防止
    super.dispose();
  }

  Widget build(BuildContext context) {


    final _screens = [
      Page2(title: 'KAIA Sub-Payment System WriteQR'),
      Page1(title: 'KAIA Sub-Payment System ReadQR'),
    ];

    return Scaffold(
        resizeToAvoidBottomInset: false,
        body:_screens[_selectedIndex],

        bottomNavigationBar: BottomNavigationBar(
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(icon: Icon(Icons.attach_money_outlined),label: 'Read'),
            BottomNavigationBarItem(icon: Icon(Icons.qr_code_2), label: 'Write'),
          ],
          type: BottomNavigationBarType.fixed,
        ),
        floatingActionButton: ValueListenableBuilder(
            valueListenable: addressNotifier,
            builder: (context, address, _){
              return FloatingActionButton(
                isExtended: true,
                onPressed: () async{
                  await _scanAvailableWallets;
                  await CheckWallets(context);
                  //await connectWeb3();
                  print('Connected Address: ${userAddress}');
                },
                child: const Icon(Icons.cable),
                backgroundColor: userAddress.isNotEmpty ? Colors.blue : Colors.grey[200],
              );
            }
        )
    );
  }
}
