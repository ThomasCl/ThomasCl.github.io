using System.Windows.Input;
using Model.MineSweeper;

namespace ViewModel.Commands
{
    public class UncoverSquareCommand : ICommand
    {
        private SquareViewModel svm;
        public UncoverSquareCommand(SquareViewModel squareViewModel) {this.svm= squareViewModel; }

        public event EventHandler? CanExecuteChanged;

        public void Execute(object parameter)
        {
            if (svm.Square.Value.Status == SquareStatus.Covered && svm.game.Value.Status == GameStatus.InProgress)
            {
                svm.game.Value = svm.game.Value.UncoverSquare(svm.pos);
                svm.gameStatus = svm.game.Value.Status;
                if (svm.game.Value.Status == GameStatus.Lost)
                {
                    svm.IsLit.Value = true;
                }
                if (svm.game.Value.Status != GameStatus.InProgress) {
                    svm.IsOver();
                }
            }
        }
        public bool CanExecute(object parameter) { return true; }
    }
}
