using Model.MineSweeper;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;

namespace View.Converters
{

    public class SquareValueConverter : IValueConverter
    {
        public object Zero
        { get; set; }
        public object One
        { get; set; }
        public object Two
        { get; set; }
        public object Three
        { get; set; }
        public object Four
        { get; set; }
        public object Five
        { get; set; }
        public object Six
        { get; set; }
        public object Seven
        { get; set; }
        public object Eight
        { get; set; }


        public object Convert(object value, Type type, object parameter, CultureInfo culture)
        {

            return (String)value switch
            {
                "" => Zero,
                "1" => One,
                "2" => Two,
                "3" => Three,
                "4" => Four,
                "5" => Five,
                "6" => Six,
                "7" => Seven,
                "8" => Eight,

                _ => throw new InvalidCastException("No valid values"),
            };
        }
        public object ConvertBack(object value, Type type, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }

    }
}