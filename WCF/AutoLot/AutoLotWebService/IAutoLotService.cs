using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace AutoLotService
{
    [ServiceContract]
    public interface IAutoLotService
    {
        [OperationContract]
        void InsertCar(string make, string color, string petname);
        [OperationContract(Name = "InsertCarWithDetails")]
        void InsertCar(InventoryRecord car);
        [OperationContract]
        InventoryRecord[] GetInventory();        
    }

    [DataContract]
    public class InventoryRecord
    {
        [DataMember]
        public int ID;
        [DataMember]
        public string Make;
        [DataMember]
        public string Color;
        [DataMember]
        public string PetName;
    }

}
