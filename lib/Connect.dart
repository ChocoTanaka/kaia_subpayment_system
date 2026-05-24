import 'dart:async';
import 'dart:js_interop';

// JSから返ってくるウォレット情報の構造を定義
@JS()
@anonymous
extension type JSWalletInfo._(JSObject _) implements JSObject {
  external JSString get name;
  external JSString get rdns;
  external JSString get icon;
}

// JS関数のバインディング
@JS('getAvailableWallets')
external JSPromise<JSArray<JSWalletInfo>> jsGetAvailableWallets();

@JS('connectSelectedWallet')
external JSPromise<JSString> jsConnectSelectedWallet(JSString rdns);

// FlutterのUIで使うためのクリーンなデータモデル
class WalletModel {
  final String name;
  final String rdns;
  final String iconDataUrl;

  WalletModel({required this.name, required this.rdns, required this.iconDataUrl});
}