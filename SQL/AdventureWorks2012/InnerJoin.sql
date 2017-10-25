--inner join to find out
--How many persons are from a particular state/province?
use AdventureWorks2012;
go

select count(pa.StateProvinceID) as StateProviceIDCount, psp.CountryRegionCode, psp.[Name] as StateProvinceName, 
	    psp.StateProvinceCode

from person.address as pa
inner join  person.StateProvince as psp
on pa.StateProvinceID = psp.StateProvinceID
group by psp.CountryRegionCode, psp.name, psp.StateProvinceCode
order by psp.CountryRegionCode asc
go