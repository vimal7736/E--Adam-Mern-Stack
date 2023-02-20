import CountryDropdown from '../components/common/countries';
import ZipCodeDropdown from '../components/common/zipcodeDropdown';
import CbmCalculator from '../components/dashboard/calculator';
import CargoSearchRates from '../components/dashboard/fake';
import Layout from '../components/dashboard/Layout';
import NeedAssistance from '../components/dashboard/needassistance';
import ShipmentPrices from '../components/dashboard/shipmentprice';

const Dashboard = () => (
  <>
    <Layout>
      <p className='text-gray-700 text-3xl mb-16 font-bold'>Dashboard</p>

      <div className='grid lg:grid-cols-3 gap-5 mb-16'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='rounded bg-white h-40 shadow-sm'></div>
        ))}
      </div>
      <div className='bg-gray-100 h-96 shadow-lg'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <ShipmentPrices />
        </div>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <CbmCalculator />
        </div>
        <br />
        <div className='bg-white p-3 rounded-lg shadow-md'></div>

        <br />
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <NeedAssistance />
        </div>
      </div>
    </Layout>
  </>
);

export default Dashboard;
