using System;

namespace demo1.Dtso666.Dto_Dtso666
{
    public class DTSU666_Post_Dto
    {

        public string Name = "Đồng hồ DTSU666";
        public double A_sum { get; init; }
        public double A_imp { get; init; }
        public double A_exp { get; init; }
        public double Ua { get; init; }
        public double Ub { get; init; }
        public double Uc { get; init; }
        public double Ia { get; init; }
        public double Ib { get; init; }
        public double Ic { get; init; }
        public double Pt { get; init; }
        public double Pa { get; init; }
        public double Pb { get; init; }
        public double Pc { get; init; }
        public double Ft { get; init; }
        public double Fa { get; init; }
        public double Fb { get; init; }
        public double Fc { get; init; }

        public DateTimeOffset Date = DateTimeOffset.Now;
    }
}
