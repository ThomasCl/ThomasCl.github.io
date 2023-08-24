using System.Windows.Input;
using Model.Data;
using Model.MineSweeper;
using Cells;

namespace ViewModel.Commands
{
    public class FlagSquareCommand : ICommand
    {
        private ICell<IGame> game;
        private Vector2D position;
        public FlagSquareCommand(ICell<IGame> game, Vector2D pos) { this.game = game; position = pos; }

        public event EventHandler? CanExecuteChanged;

        public void Execute(object parameter)
        {
            if (game.Value.Status == GameStatus.InProgress)
            {
                if (game.Value.IsSquareCovered(position) == true || (game.Value.Board[position].Status == SquareStatus.Flagged))
                {
                    game.Value = game.Value.ToggleFlag(position);
                }
            }



        }
        public bool CanExecute(object parameter) { return true; }
    }
}
