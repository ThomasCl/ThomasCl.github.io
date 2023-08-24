namespace ViewModel
{
    public class BoardSettings
    {
        public int BoardSize { get; set; }
        public bool Flooding { get; set; }
        public double MinePropability { get; set; }

        public BoardSettings(int boardsize, bool flooding, double minepropability) {
            this.BoardSize = boardsize;
            this.Flooding = flooding;
            this.MinePropability = minepropability;
        }
    }
}
