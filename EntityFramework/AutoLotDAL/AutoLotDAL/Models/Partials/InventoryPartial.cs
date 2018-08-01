using System;
using System.Collections.Generic;
using System.Text;

namespace AutoLotDAL.Models
{
    public partial class Inventory
    {
        public override string ToString()
        {
            // since petname column could be empty, supply the default name of **No Name**
            return $"{this.PetName ?? "**No Name**"} is a {this.Color} {this.Make} with ID {this.CarId}.";
        }
    }
}
