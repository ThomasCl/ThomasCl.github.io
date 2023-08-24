using Cells;
using Model.MineSweeper;
using System.Windows.Input;

namespace ViewModel
{
    public class NewGameCommand : ICommand
    {
        private ICell<GameViewModel> gameviewmodel;
        private ICommand switchscreens;
        private ICell<BoardSettings> boardSettings;
        public NewGameCommand(ICell<GameViewModel> gameviewmodel, ICommand switchscreens, ICell<BoardSettings> boardSettings) { 
            this.gameviewmodel = gameviewmodel;
            this.switchscreens = switchscreens;
            this.boardSettings = boardSettings;
        }

        public event EventHandler? CanExecuteChanged;

        public bool CanExecute(object? parameter)
        {
            return true;
        }

        public void Execute(object? parameter)
        {

            var size = 0;
            var flooding = true;
            var mineprob = (double)0;

            if (parameter is String)
            {
                if ((string)parameter == "easy")
                {
                    size = 5;
                    flooding = true;
                    mineprob = 0.2;
                }
                if ((string)parameter == "medium")
                {
                    size = 10;
                    flooding = true;
                    mineprob = 0.2;
                }
                if ((string)parameter == "hard")
                {
                    size = 15;
                    flooding = true;
                    mineprob = 0.2;
                }
                if ((string)parameter == "extreme")
                {
                    size = 20;
                    flooding = false;
                    mineprob = 0.5;
                }
            }
            else
            {
                var values = (object[])parameter;
                if (values.Length == 3)
                {
                    size = (int)Math.Round((double)values[1]);
                    flooding = (bool)values[0];
                    mineprob = (double)values[2];
                }
            }
            var x = IGame.CreateRandom(size, mineprob, flooding);
            gameviewmodel.Value = new GameViewModel(x);
            switchscreens.Execute("");

            boardSettings.Value.BoardSize = size;
            boardSettings.Value.Flooding= flooding;
            boardSettings.Value.MinePropability = mineprob;
        }
    }
}
