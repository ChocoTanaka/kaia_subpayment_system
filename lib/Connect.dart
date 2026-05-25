import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'package:web/web.dart' as web;

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

void scanWalletsDirectly() {
  // 1. JSのイベントリスナーを、Dartの関数として直接登録する
  web.window.addEventListener('eip6963:announceProvider', (web.Event event) {
    // JSのカスタムイベントから中身を強引にDartへ引き出す
    final customEvent = event as web.CustomEvent;
    final detail = customEvent.detail as JSObject;

    final info = detail.getProperty<JSObject>('info'.toJS);
    final name = info.getProperty<JSString>('name'.toJS).toDart;
    final rdns = info.getProperty<JSString>('rdns'.toJS).toDart;

    print("🎯 Dart側で直接ウォレットを検知しました: $name ($rdns)");
    // ここでFlutterの状態管理（Riverpod等）に直接ぶち込む！
  }.toJS);

  // 2. スキャン要求イベントもDartから直接発火
  web.window.dispatchEvent(web.Event('eip6963:requestProvider'));
}