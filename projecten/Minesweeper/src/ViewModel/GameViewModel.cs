using Model.Data;
using Model.MineSweeper;
using Cells;
using System.Diagnostics;
using System.ComponentModel;

namespace ViewModel
{
    public class GameViewModel: INotifyPropertyChanged
    {
        private readonly ICell<IGame> game;

        private GameStatus _gamestatus;
        public GameStatus gameStatus { get { return _gamestatus; } set { _gamestatus = value; NotifyPropertyChanged(nameof(gameStatus)); } }

        private GameBoardViewModel board;
        public GameBoardViewModel Board {get { return board; }}

        public GameViewModel(IGame game)
        {
            this.game = Cell.Create(game);
            this.board = new GameBoardViewModel(this.game);
            

            foreach(RowViewModel rowViewModel in this.board.Rows)
            {
                foreach(SquareViewModel squareViewModel in rowViewModel.Squares)
                {
                    squareViewModel.PropertyChanged += PropertyChangedInGameViewModel;
                }
            }

        }
        public void displayBombs()
        {
            Board.displayBombs();
        }

        void PropertyChangedInGameViewModel(object sender, PropertyChangedEventArgs e)
        {
            switch (e.PropertyName)
            {
                case "Lost":
                    this.gameStatus = game.Value.Status;
                    displayBombs();
                    break;
                case "Won":
                    this.gameStatus = game.Value.Status;
                    break;
            }
        }
        private void NotifyPropertyChanged(String propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        public event PropertyChangedEventHandler PropertyChanged;
    }
}