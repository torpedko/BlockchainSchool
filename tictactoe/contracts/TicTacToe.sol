pragma solidity ^0.4.0;

contract TicTacToe {

  modifier validMove(uint256 _row, uint256 _column) {
    if (players[msg.sender] > 0
      && _row <= 2
      && _column <= 2
      && board[_row][_column] == 0
      && turn == players[msg.sender]) {
      _;
    } else {
      throw;
    }
  }

  function () payable {}

  function move(uint256 _row, uint256 _column) validMove(_row, _column) {
    board[_row][_column] = players[msg.sender];

    if (players[msg.sender] == 1) {
      turn = 2;
    } else {
      turn = 1;
    }
  }

  function hasWon(uint256 _player) public constant returns (bool gameWon) {
    // horizontal lines
    if ((board[0][0] == _player && board[0][1] == _player && board[0][2] == _player)
     || (board[1][0] == _player && board[1][1] == _player && board[1][2] == _player)
     || (board[2][0] == _player && board[2][1] == _player && board[2][2] == _player)

     // verticle lines
     || (board[0][0] == _player && board[1][0] == _player && board[2][0] == _player)
     || (board[0][1] == _player && board[1][1] == _player && board[2][1] == _player)
     || (board[0][2] == _player && board[1][2] == _player && board[2][2] == _player)

     // diagonal lines
     || (board[0][0] == _player && board[1][1] == _player && board[0][2] == _player)
     || (board[2][0] == _player && board[1][1] == _player && board[2][2] == _player)) {
       return true;
    }
  }

  function payout() {
    if (!hasWon(players[msg.sender])) { throw; }

    if (!msg.sender.send(this.balance)) {
      throw;
    }
  }

  function TicTacToe(address _player1, address _player2) {
    players[_player1] = 1;
    players[_player2] = 2;
    addressOf[1] = _player1;
    addressOf[2] = _player2;
  }

  mapping(uint256 => mapping(uint256 => uint256)) public board;
  mapping(address => uint256) public players;
  mapping(uint256 => address) public addressOf;
  uint256 public turn = 1;
}
