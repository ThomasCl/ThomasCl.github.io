using Cells;
using Model.MineSweeper;
using System.Windows.Input;

namespace ViewModel
{
    public class RestartGameCommand : ICommand
    {
        private ICell<GameViewModel> gameviewmodel;
        private BoardSettings boardSettings;
        public RestartGameCommand(ICell<GameViewModel> gameviewmodel, BoardSettings boardSettings)
        {
            this.gameviewmodel = gameviewmodel;
            this.boardSettings = boardSettings;
        }

        public event EventHandler? CanExecuteChanged;

        public bool CanExecute(object? parameter)
        {
            return true;
        }

        public void Execute(object? parameter)
        {
            var x = IGame.CreateRandom(boardSettings.BoardSize, boardSettings.MinePropability, boardSettings.Flooding);
            gameviewmodel.Value = new GameViewModel(x);
        }
    }
}
