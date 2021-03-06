import React from 'react'
import Layout from 'antd/es/layout'
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from 'react-router-dom'

import SiderMenu from './components/SiderMenu'
import TeamsTable from './components/TeamsTable/TeamsTable'
import TasksTable from './components/TasksTable/TasksTable'
import EmployeesTable from './components/EmployeesTable/EmployeesTable'


export default function App() {
  return (
    <BrowserRouter>
      <Layout style={{height:"100vh"}}>
        <Layout.Sider>
          <SiderMenu />
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <Routes>
              <Route path='/employees' element={<EmployeesTable />} />
              <Route path='/teams' element={<TeamsTable />} />
              <Route path='/tasks' element={<TasksTable />} />
              <Route path="*" element={<Navigate to="/employees" />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}
