import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'Web3.dart';


class Page2 extends StatefulWidget {
  const Page2({super.key, required this.title});
  final String title;

  @override
  State<Page2> createState() => _MPSsState_Write();
}

class _MPSsState_Write extends State<Page2> {
  final TextEditingController amountController = TextEditingController();
  final ScrollController _scrollController_R = ScrollController();
  String? generatedUri;
  int amount = 0;
  bool isShow = false;

  String URI(BigInt Wei, stablecoin coin, chain chain){
    String uri = 'ethereum:${coin.Address}@${chain.Id}/transfer?address=${userAddress}&uint256=$Wei';
    return uri;
  }


  @override
  void initState(){
    super.initState();

  }

  Widget Mainbar(){
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        const SizedBox(height: 40),
        Row(
          children: [
            Text(
              "Address:",
              style: const TextStyle(fontSize: 22),
            ),
            const SizedBox(width: 10),
            Text(
              userAddress.isNotEmpty ? maskMiddle(userAddress, head: 6, tail: 6) : "Not Connected",
              style: const TextStyle(fontSize: 22),
              overflow: TextOverflow.ellipsis,
            )
          ],
        ),
        const SizedBox(height: 40),
        Row(
          children: [
            Expanded(
              child: TextFormField(
                controller: amountController,
                onChanged: (text)=> setState(() {
                  amount =int.parse(amountController.text);
                }),
                decoration: InputDecoration(
                  labelText: 'Amount (${now_coin.Name})',
                  border: UnderlineInputBorder(),
                ),
                keyboardType: TextInputType.number,
                style: TextStyle(
                  fontSize: 22,
                ),
              ),
            ),
            const SizedBox(width: 20),
            DropdownButton<stablecoin>(
              value: now_coin,
              items: stablecoin.values.map((stablecoin coin){
                return DropdownMenuItem(
                  value: coin,
                  child: Text(coin.Name), // enumに定義したラベルを表示
                );
              }).toList(),
              onChanged: (value) {
                setState(() {
                  value?.Changecoin();
                  print(now_coin.Name);
                });

              },
            ),
          ],
        ),
        const SizedBox(height: 40),
        Container(
          width: 300,
          height: 300,
          decoration: BoxDecoration(
            border: Border.all(color: Colors.black, width: 2), // 黒い枠線
          ),
          child: isShow == false
              ? SizedBox(
            width: 250,
            height: 250,
          )
              : QrImageView(
            data: generatedUri!,
            size: 240,
          ),
        ),
      ],
    );
  }


  @override
  Widget build(BuildContext context) {

    return Scaffold(
        resizeToAvoidBottomInset: false,
        appBar: AppBar(
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          title: Text(widget.title),
        ),
        body: Center(
            child:Column(
              children: [
                Expanded(
                  child: Scrollbar(
                    controller: _scrollController_R,
                    child: SingleChildScrollView(
                        controller: _scrollController_R,
                        child: Mainbar()
                    ),
                  ),
                ),
                const SizedBox(height: 20),
                Container(
                  width: 250,
                  height:50,
                  child: ElevatedButton(
                      onPressed:() {
                        if(userAddress != "" && amount !=0){
                          setState(() {
                            final BigInt amountWei = BigInt.from(amount) * BigInt.from(10).pow(now_coin.Decimal);
                            final uri =
                            URI(amountWei,now_coin,now_chain);
                            print(uri);
                            generatedUri = uri;
                            isShow = !isShow;
                          });
                        }else{
                          null;
                        }
                      },
                      child: Text(
                        isShow ? "RESET" : "SET",
                        style: TextStyle(
                            fontSize: 30,
                            color: Colors.black
                        ),
                      )
                  ),
                )
              ],
            )
        ),
    );
  }
}