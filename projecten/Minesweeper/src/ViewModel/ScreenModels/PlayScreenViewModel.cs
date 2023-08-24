using Cells;
using Model.MineSweeper;
using System.Diagnostics;
using System.Windows.Input;
using ViewModel.Commands;

namespace ViewModel.ScreenModels
{
    public class PlayScreenViewModel : ScreenViewModel
    {
        public PlayScreenViewModel(ICell<ScreenViewModel> currentScreen, ICell<GameViewModel> gameViewModel, BoardSettings boardSettings) : base(currentScreen)
        {
            this.GameViewModel = gameViewModel;
            this.RestartGame = new RestartGameCommand(gameViewModel, boardSettings);
            this.SwitchToSettingsScreen = new ActionCommand(() => CurrentScreen.Value = new SettingsScreenViewModel(this.CurrentScreen, GameViewModel, boardSettings));
        }
        public ICell<GameViewModel> GameViewModel { get; set; }
        public ICommand SwitchToSettingsScreen { get; }
        public ICommand RestartGame { get; }        
    }
}
