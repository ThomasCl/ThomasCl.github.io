using Model.Data;
using Model.MineSweeper;
using Cells;

namespace ViewModel
{
    public class RowViewModel
    {
        public IEnumerable<SquareViewModel> Squares
        { get; }

        public RowViewModel(ICell<IGame> game, int rownumber)
        {
            this.Squares = Row(game, rownumber);
        }

        IEnumerable<SquareViewModel> Row(ICell<IGame> game, int row)
        {
            var result = new List<SquareViewModel>();
            for (int i = 0; i < game.Value.Board.Width; i++)
            {
                var pos = new Vector2D(i, row);
                result.Add(new SquareViewModel(game, pos));
            }
            return result;
        }

        public void displayBombs()
        {
            foreach(var square in Squares)
            {
                square.DisplayBomb = true;
                square.gameStatus = GameStatus.Lost;
            }
        }
    }
}
