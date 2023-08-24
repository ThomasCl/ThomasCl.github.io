using Model.MineSweeper;
using System;
using System.Globalization;
using System.Windows.Data;

namespace View.Converters 
{
	public class GameStatusConverter : IValueConverter
	{
        public object InProgress
        { get; set; }
        public object Won
        { get; set; }
        public object Lost
        { get; set; }
        
        
		public object Convert(object value, Type type, object parameter, CultureInfo culture)
		{

            return (GameStatus)value switch
            {
                GameStatus.InProgress => InProgress,
                GameStatus.Won => Won,
                GameStatus.Lost => Lost,
                
                _ => throw new InvalidCastException(),
            };
        }
		public object ConvertBack(object value, Type type, object parameter, CultureInfo culture) {
            throw new NotImplementedException();
        }

    }
}
