﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AutoLotWebService_Client.AutoLotService {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="InventoryRecord", Namespace="http://schemas.datacontract.org/2004/07/AutoLotService")]
    [System.SerializableAttribute()]
    public partial class InventoryRecord : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ColorField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int IDField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string MakeField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string PetNameField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Color {
            get {
                return this.ColorField;
            }
            set {
                if ((object.ReferenceEquals(this.ColorField, value) != true)) {
                    this.ColorField = value;
                    this.RaisePropertyChanged("Color");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int ID {
            get {
                return this.IDField;
            }
            set {
                if ((this.IDField.Equals(value) != true)) {
                    this.IDField = value;
                    this.RaisePropertyChanged("ID");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Make {
            get {
                return this.MakeField;
            }
            set {
                if ((object.ReferenceEquals(this.MakeField, value) != true)) {
                    this.MakeField = value;
                    this.RaisePropertyChanged("Make");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string PetName {
            get {
                return this.PetNameField;
            }
            set {
                if ((object.ReferenceEquals(this.PetNameField, value) != true)) {
                    this.PetNameField = value;
                    this.RaisePropertyChanged("PetName");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="AutoLotService.IAutoLotService")]
    public interface IAutoLotService {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IAutoLotService/InsertCar", ReplyAction="http://tempuri.org/IAutoLotService/InsertCarResponse")]
        void InsertCar(string make, string color, string petname);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IAutoLotService/InsertCar", ReplyAction="http://tempuri.org/IAutoLotService/InsertCarResponse")]
        System.Threading.Tasks.Task InsertCarAsync(string make, string color, string petname);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IAutoLotService/InsertCarWithDetails", ReplyAction="http://tempuri.org/IAutoLotService/InsertCarWithDetailsResponse")]
        void InsertCarWithDetails(AutoLotWebService_Client.AutoLotService.InventoryRecord car);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IAutoLotService/InsertCarWithDetails", ReplyAction="http://tempuri.org/IAutoLotService/InsertCarWithDetailsResponse")]
        System.Threading.Tasks.Task InsertCarWithDetailsAsync(AutoLotWebService_Client.AutoLotService.InventoryRecord car);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IAutoLotService/GetInventory", ReplyAction="http://tempuri.org/IAutoLotService/GetInventoryResponse")]
        AutoLotWebService_Client.AutoLotService.InventoryRecord[] GetInventory();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IAutoLotService/GetInventory", ReplyAction="http://tempuri.org/IAutoLotService/GetInventoryResponse")]
        System.Threading.Tasks.Task<AutoLotWebService_Client.AutoLotService.InventoryRecord[]> GetInventoryAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IAutoLotServiceChannel : AutoLotWebService_Client.AutoLotService.IAutoLotService, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class AutoLotServiceClient : System.ServiceModel.ClientBase<AutoLotWebService_Client.AutoLotService.IAutoLotService>, AutoLotWebService_Client.AutoLotService.IAutoLotService {
        
        public AutoLotServiceClient() {
        }
        
        public AutoLotServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public AutoLotServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public AutoLotServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public AutoLotServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public void InsertCar(string make, string color, string petname) {
            base.Channel.InsertCar(make, color, petname);
        }
        
        public System.Threading.Tasks.Task InsertCarAsync(string make, string color, string petname) {
            return base.Channel.InsertCarAsync(make, color, petname);
        }
        
        public void InsertCarWithDetails(AutoLotWebService_Client.AutoLotService.InventoryRecord car) {
            base.Channel.InsertCarWithDetails(car);
        }
        
        public System.Threading.Tasks.Task InsertCarWithDetailsAsync(AutoLotWebService_Client.AutoLotService.InventoryRecord car) {
            return base.Channel.InsertCarWithDetailsAsync(car);
        }
        
        public AutoLotWebService_Client.AutoLotService.InventoryRecord[] GetInventory() {
            return base.Channel.GetInventory();
        }
        
        public System.Threading.Tasks.Task<AutoLotWebService_Client.AutoLotService.InventoryRecord[]> GetInventoryAsync() {
            return base.Channel.GetInventoryAsync();
        }
    }
}
