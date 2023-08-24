using Model.MineSweeper;
using System;
using System.Globalization;
using System.Windows.Data;

namespace View.Converters 
{
	public class SquareStatusConverter : IValueConverter
	{
        public object Uncovered
        { get; set; }
        public object Covered
        { get; set; }
        public object Flagged
        { get; set; }
        public object Mine
        { get; set; }

        
		public object Convert(object value, Type type, object parameter, CultureInfo culture)
		{

            return (SquareStatus)value switch
            {
                SquareStatus.Uncovered => Uncovered,
                SquareStatus.Covered => Covered,
                SquareStatus.Mine => Mine,
                SquareStatus.Flagged => Flagged,
                
                _ => throw new InvalidCastException(),
            };
        }
		public object ConvertBack(object value, Type type, object parameter, CultureInfo culture) {
            throw new NotImplementedException();
        }

    }
}
