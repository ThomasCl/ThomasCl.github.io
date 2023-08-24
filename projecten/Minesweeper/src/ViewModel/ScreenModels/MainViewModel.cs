using Cells;
using Model.MineSweeper;


namespace ViewModel.ScreenModels
{
    public class MainViewModel
    {
        public ICell<GameViewModel> GameViewModel { get; set; }

        public MainViewModel()
        {

            var boardSettings = new BoardSettings(10, true, 0.2);

            var game = IGame.CreateRandom(boardSettings.BoardSize, boardSettings.MinePropability, boardSettings.Flooding);
            this.GameViewModel = Cell.Create(new GameViewModel(game));

            // Create empty cell
            CurrentScreen = Cell.Create<ScreenViewModel>(null);

            // Create screen A
            var firstScreen = new PlayScreenViewModel(CurrentScreen, GameViewModel, boardSettings);

            // Put first screen in CurrentScreen cell
            CurrentScreen.Value = firstScreen;

        }
        public ICell<ScreenViewModel> CurrentScreen { get; }
    }
}
