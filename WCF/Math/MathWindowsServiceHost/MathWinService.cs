using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using MathServiceLibrary;
using System.ServiceModel;

namespace MathWindowsServiceHost
{
    public partial class MathWinService : ServiceBase
    {
        private ServiceHost myHost;

        public MathWinService()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            // to be safe
            if (myHost != null)
            {
                myHost.Close();
            }

            // create host
            myHost = new ServiceHost(typeof(MathService),
                        new Uri("http://localhost:8087/MathServiceLibrary"));

            // the ABC's in code (address, binding, contract)
            //Uri address = new Uri("http://localhost:8087/MathServiceLibrary");
            //WSHttpBinding binding = new WSHttpBinding();
            //Type contract = typeof(IBasicMath);

            // add this endpoint
            //myHost.AddServiceEndpoint(contract, binding, address);

            // Opt in for default endpoints, rather than the manual wire-up above
            myHost.AddDefaultEndpoints();
            
            // open the host
            myHost.Open();
        }

        protected override void OnStop()
        {
            //shut down the host
            if(myHost != null)
            {
                myHost.Close();
            }
        }
    }
}