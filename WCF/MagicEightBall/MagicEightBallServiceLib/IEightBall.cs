using System.ServiceModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MagicEightBallServiceLib
{
    [ServiceContract(Namespace = "http://www.appdevco.com")]
    public interface IEightBall
    {
        [OperationContract]
        string ObtainAnswerToQuestion(string userQuestion);


    }
}
