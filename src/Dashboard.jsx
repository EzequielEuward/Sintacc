import {HeaderStudio} from './BackOffice/components/HeaderStudio';
import {NavStudio} from './BackOffice/components/NavStudio';
import {NavHeader} from './BackOffice/components/NavHeader'
import {TablePacientesStudio} from './BackOffice/components/TablePacientesStudio';

export const Dashboard = () => {
  return (
    <div className="d-flex vh-100">
      <div className="border-end bg-light" style={{ width: '240px' }}>

        <HeaderStudio/>

        <NavStudio/>

      </div>
      <div className="flex-grow-1 d-flex flex-column">
      
        <NavHeader/>

        <main className="flex-grow-1 overflow-auto p-3">
          <div className="border rounded shadow-sm">
            
           <TablePacientesStudio/>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
