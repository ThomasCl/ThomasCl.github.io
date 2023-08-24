using Cells;
using Model.MineSweeper;
using System.Windows.Input;
using ViewModel.Commands;

namespace ViewModel.ScreenModels
{
    public class SettingsScreenViewModel : ScreenViewModel
    {
        public SettingsScreenViewModel(ICell<ScreenViewModel> currentScreen, ICell<GameViewModel> gameViewModel, BoardSettings boardSettings) : base(currentScreen)
        {
            var boardsetcell = Cell.Create(boardSettings);
            SwitchToPlayScreen = new ActionCommand(() => CurrentScreen.Value = new PlayScreenViewModel(this.CurrentScreen, gameViewModel, boardsetcell.Value));
            NewGame = new NewGameCommand(gameViewModel, SwitchToPlayScreen, boardsetcell);
            this.MinBoardSize = (Double)IGame.MinimumBoardSize;
            this.MaxBoardSize = (Double)IGame.MaximumBoardSize;
            this.BoardSettings = boardSettings;
        }

        public BoardSettings BoardSettings { get; set; }
        public Double MinBoardSize { get; }
        public Double MaxBoardSize { get; }
        public ICommand SwitchToPlayScreen { get; }
        public ICommand NewGame { get; }
    }
}
