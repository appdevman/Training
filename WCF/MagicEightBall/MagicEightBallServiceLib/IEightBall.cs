using System.ServiceModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MagicEightBallServiceLib
{
    [ServiceContract(Namespace = "localhost")]
    public interface IEightBall
    {
        [OperationContract]
        string ObtainAnswerToQuestion(string userQuestion);


    }
}
