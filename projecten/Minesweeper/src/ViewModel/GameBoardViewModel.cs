using Model.MineSweeper;
using Cells;

namespace ViewModel
{
    public class GameBoardViewModel
    {
        private readonly ICell<IGameBoard> board;
        public IEnumerable<RowViewModel> Rows
        { get; }

        public GameBoardViewModel(ICell<IGame> game)
        {
            this.board = game.Derive(g => g.Board);
            this.Rows = makeRows(game);
        }

        IEnumerable<RowViewModel> makeRows(ICell<IGame> game)
        {
            var result = new List<RowViewModel>();
            for (int i = 0; i < board.Value.Height; i++)
            {
                result.Add(new RowViewModel(game, i));
            }
            return result;
        }
        public void displayBombs()
        {
            foreach (var row in Rows)
            {
                row.displayBombs();
            }
        }
    }
}
