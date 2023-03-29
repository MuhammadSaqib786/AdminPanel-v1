import AppLayout from '@/components/AppLayout'
import ViewEmployeeList from '@/components/ViewEmployeeList'
import { Router, Route } from 'electron-router-dom'



export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<AppLayout />} />
          <Route path="/view" element={<ViewEmployeeList />} />
        </>
      }
      
    />
  )
}