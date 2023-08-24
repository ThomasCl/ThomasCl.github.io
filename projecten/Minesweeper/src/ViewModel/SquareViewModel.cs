using Model.Data;
using Model.MineSweeper;
using System.Windows.Input;
using Cells;
using System.ComponentModel;

namespace ViewModel
{
    public class SquareViewModel : INotifyPropertyChanged
    {
        public ICell<Square> Square
        { get; }
        public ICommand Uncover { get;}
        public ICommand Flag { get;}
        public ICell<bool> IsLit { get;}
        private GameStatus _gamestatus;
        public GameStatus gameStatus { get { return _gamestatus; } set { _gamestatus = value; NotifyPropertyChanged(nameof(gameStatus)); } }
        public ICell<IGame> game;
        public Vector2D pos;

        public SquareViewModel(ICell<IGame> game, Vector2D pos)
        {
            this.Square = game.Derive( g => g.Board[pos]);
            this.IsLit = Cell.Create(false);
            Uncover = new Commands.UncoverSquareCommand(this);
            Flag = new Commands.FlagSquareCommand(game, pos);
            this.game = game;
            this.pos = pos;
        }

        public string DisplayedValue
        {
            get { 
                if(Square.Value.NeighboringMineCount == 0)
                {
                    return "";
                }
                return Square.Value.NeighboringMineCount.ToString(); 
            }
        }
        private bool displayBomb;
        public bool DisplayBomb
        {
           get
            {
                return displayBomb;
            }
            set
            {
                if (game.Value.Status == GameStatus.Lost) //game.Value.Mines throws error when != GameStatus.Lost
                {
                    foreach (var bomb in game.Value.Mines)
                    {
                        if (bomb.Equals(pos))
                        {
                            displayBomb = true;
                            NotifyPropertyChanged(nameof(DisplayBomb));
                            return;
                        }
                    }
                }
                displayBomb = false;
            }
        }
        public void IsOver()
            {
                switch (game.Value.Status)
                {
                    case GameStatus.Won: NotifyPropertyChanged("Won"); break;
                    case GameStatus.Lost: NotifyPropertyChanged("Lost"); break;
                }
            }


        private void NotifyPropertyChanged(String propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        public event PropertyChangedEventHandler PropertyChanged;
    }
}
