import 'package:flutter/material.dart';
import 'package:kaia_subpayment_system/Connect.dart';
import 'Page1.dart';
import 'Page2.dart';
import 'Web3.dart';
import 'dart:js_interop' as js;

// JSの関数を定義
@js.JS('connectWallet')
external js.JSPromise<js.JSString?> _connectWallet();

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

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
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
      final js.JSString? result = await _connectWallet().toDart;

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
                  userAddress = await connectWallet_KAIA(); // これだけで MetaMask が起動し、userAddress に値が入る
                  addressNotifier.value = userAddress;
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
