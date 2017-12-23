    var eth = new Eth(TestRPC.provider());
    var el = function(id){ return document.querySelector(id); };
    var TicTacToeABI = JSON.parse('[{\"constant\":false,\"inputs\":[{\"name\":\"_row\",\"type\":\"uint256\"},{\"name\":\"_column\",\"type\":\"uint256\"}],\"name\":\"move\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"addressOf\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"payout\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_player\",\"type\":\"uint256\"}],\"name\":\"hasWon\",\"outputs\":[{\"name\":\"gameWon\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"board\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"turn\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"players\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"inputs\":[{\"name\":\"_player1\",\"type\":\"address\"},{\"name\":\"_player2\",\"type\":\"address\"}],\"type\":\"constructor\"},{\"payable\":true,\"type\":\"fallback\"}]');
    var TicTacToeBytecode = '606060408181526001600355806109c4833960a081529051608051600160a060020a03808316600090815260016020818152868320919091559183168152938420600290819055908190527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e080546c01000000000000000000000000948502859004600160a060020a0319918216179091559084527f679795a0195a1b76cdebb7c51d74e058aee92919b8c3389af86ef24535e8a28c80549284029390930491161790556108f29081906100d290396000f3606060405236156100615760e060020a60003504630867408f811461006757806311a800bc1461014057806363bd1d4a1461016657806375eeadc31461077b5780638086a92a1461078b5780638b299903146107b3578063e2eb41ff146107c1575b6107de5b565b34610002576107de600435602435600160a060020a033316600090815260016020526040812054839183911180156100a0575060028211155b80156100ad575060028111155b80156100ce5750600082815260208181526040808320848452909152902054155b80156100f35750600160a060020a033316600090815260016020526040902054600354145b1561082e57600160a060020a033316600081815260016020818152604080842054898552848352818520898652835290842081905593909252908190521415610822576002600355610828565b34610002576107e0600435600260205260009081526040902054600160a060020a031681565b34610002576107de600160a060020a033316600090815260016020526040902054610833905b60008080526000805160206108d28339815191526020527fed428e1c45e1d9561b62834e1a2d3015a0caae3bfdc16b4da059ac885b01a1455482148015610209575060016000526000805160206108d28339815191526020527e9316a6b27b778fc9c4cd520e332fce845aa0089877f87cfe8c1d77fa4cc1105482145b801561024c575060026000526000805160206108d28339815191526020527f09f922a082099d8bb3cef76f214b97d4ea18be3ab11deb731e4676110a885b485482145b806103005750600080526000805160206108928339815191526020527f871b3b0713ea5d7fd1f75a811c349209996193f3a2535cdfd79d35416bf8012354821480156102bd575060016000526000805160206108928339815191526020526000805160206108b28339815191525482145b8015610300575060026000526000805160206108928339815191526020527fb37150ceb7e138645bfe4dfcef9a75073e1d7aa14c524dfdd20d3f751fad10845482145b806103c65750600080526000805160206108728339815191526020527f5876eea3bc0f5fdc8a8f5162bbf9ae0de1b6932ac4f065fb87ba4934bb51e90d5482148015610383575060016000526000805160206108728339815191526020527f074f1a94432de106f4a8e9fe8ba3e1cfc1d83e37bec74dfb1723c4b3a135d7235482145b80156103c6575060026000526000805160206108728339815191526020527f96d8f21026e23863466cad7746a0becd8e1c681e868774bcd95eb153dd75d10c5482145b8061048a5750600080526000805160206108d28339815191526020527fed428e1c45e1d9561b62834e1a2d3015a0caae3bfdc16b4da059ac885b01a14554821480156104485750600080526000805160206108928339815191526020527f871b3b0713ea5d7fd1f75a811c349209996193f3a2535cdfd79d35416bf801235482145b801561048a5750600080526000805160206108728339815191526020527f5876eea3bc0f5fdc8a8f5162bbf9ae0de1b6932ac4f065fb87ba4934bb51e90d5482145b8061053e575060016000526000805160206108d28339815191526020527e9316a6b27b778fc9c4cd520e332fce845aa0089877f87cfe8c1d77fa4cc11054821480156104fb575060016000526000805160206108928339815191526020526000805160206108b28339815191525482145b801561053e575060016000526000805160206108728339815191526020527f074f1a94432de106f4a8e9fe8ba3e1cfc1d83e37bec74dfb1723c4b3a135d7235482145b80610605575060026000526000805160206108d28339815191526020527f09f922a082099d8bb3cef76f214b97d4ea18be3ab11deb731e4676110a885b4854821480156105c2575060026000526000805160206108928339815191526020527fb37150ceb7e138645bfe4dfcef9a75073e1d7aa14c524dfdd20d3f751fad10845482145b8015610605575060026000526000805160206108728339815191526020527f96d8f21026e23863466cad7746a0becd8e1c681e868774bcd95eb153dd75d10c5482145b806106b95750600080526000805160206108d28339815191526020527fed428e1c45e1d9561b62834e1a2d3015a0caae3bfdc16b4da059ac885b01a1455482148015610676575060016000526000805160206108928339815191526020526000805160206108b28339815191525482145b80156106b9575060026000526000805160206108d28339815191526020527f09f922a082099d8bb3cef76f214b97d4ea18be3ab11deb731e4676110a885b485482145b8061076d5750600080526000805160206108728339815191526020527f5876eea3bc0f5fdc8a8f5162bbf9ae0de1b6932ac4f065fb87ba4934bb51e90d548214801561072a575060016000526000805160206108928339815191526020526000805160206108b28339815191525482145b801561076d575060026000526000805160206108728339815191526020527f96d8f21026e23863466cad7746a0becd8e1c681e868774bcd95eb153dd75d10c5482145b15610776575060015b919050565b34610002576107fc60043561018c565b3461000257610810600435602435600060208181529281526040808220909352908152205481565b346100025761081060035481565b346100025761081060043560016020526000908152604090205481565b005b60408051600160a060020a039092168252519081900360200190f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b60016003555b50505050565b610002565b151561083e57610002565b604051600160a060020a0333811691309091163180156108fc02916000818181858888f1935050505015156100655761000256abbb5caa7dda850e60932de0934eb1f9d0f59695050f761dc64e443e5030a569ada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7de3be84349242383ed4b31bbb7ede08a8080ac9d5e828342f449d34bf731539e9ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5';
    var gameInstance;
    var renderInterval;
    var playerWon;
    function renderBlock(row, column) {
    gameInstance.board(row, column).then(function(player){
      var block = el('#b' + String(row) + '' + String(column));
      if (player[0].toString(10) == '1') {
        block.style.background = '#F22738';
      }
      if (player[0].toString(10) == '2') {
        block.style.background = '#000';
      }
    });
    }
    function render() {
    for(var row = 0; row < 3; row ++) {
      for (var column = 0; column < 3; column ++) {
        renderBlock(row, column);
      }
    }
    gameInstance.turn().then(function(turnNumber){
      el('#turn').innerHTML = turnNumber[0].toString(10);
      gameInstance.addressOf(turnNumber[0]).then(function(playerAddress){
        el('#player').innerHTML = playerAddress[0].substr(0, 15) + '...';
      });
      gameInstance.hasWon('1').then(function(player1HasWon){
        gameInstance.hasWon('2').then(function(player2HasWon){
          if (player1HasWon[0]) { playerWon = '1'; }
          if (player2HasWon[0]) { playerWon = '2'; }
          if (playerWon) {
            el('#won').innerHTML = 'player ' + String(playerWon) + '!!';
          }
        });
      });
    });
    }
    function startGame() {
    el('#startGameContainer').style.display = 'none';
    el('#gameContainer').style.display = 'block';
    document.querySelectorAll('.block').forEach(function(blockEl){
      blockEl.addEventListener('click', function(block) {
        var row = block.target.parentNode.dataset.row;
        var col = block.target.dataset.col;
        if (playerWon) { return; }
        gameInstance.turn().then(function(turnNumber){
          gameInstance.addressOf(turnNumber[0]).then(function(playerAddress){
            gameInstance.move(row, col, { from: playerAddress[0] })
            .then(function(txHash){
              el('#response').innerHTML = 'making move with tx hash: ' + String(txHash);
              render();
            })
            .catch(function(moveError){
              el('#response').innerHTML = 'error while making move: ' + String(moveError);
            });
          });
        });
      });
    });
    renderInterval = setInterval(render, 3000);
    render();
    }
    eth.accounts(function(accountsError, accounts){
    var TicTacToe = eth.contract(TicTacToeABI, TicTacToeBytecode, { from: accounts[0], gas: '3000000' })
    document.querySelectorAll('.addressSelector').forEach(function(selector){
      accounts.forEach(function(account){
        selector.innerHTML += '<option value="' + account + '">' + account + '</option>';
      });
    });
    el('#startGame').addEventListener('click', function(){
      if (el('#player1').value == el('#player2').value) {
        return el('#response').innerHTML = 'The player addresses cannot be the same!';
      }
      TicTacToe.new(el('#player1').value, el('#player2').value,
        function(deployError, txHash){
        if (deployError) {
          return el('#response').innerHTML = 'Hmm... there was an error: ' + String(deployError);
        }
        var receiptInterval = setInterval(function(){
          eth.getTransactionReceipt(txHash, function(receiptError, receipt){
            if (receipt) {
              clearInterval(receiptInterval);
              gameInstance = TicTacToe.at(receipt.contractAddress);
              startGame();
            }
          });
        }, 300);
      });
    });
    });