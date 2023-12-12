import { Box } from '@mui/material'
import DataGridDemo from './components/DataGrid'
import FullFeaturedCrudGrid from './components/DataGrid/DataGridTest'
import StylingRowsGrid from './components/DataGrid/StyleDataGrid'
import VisibleColumnsBasicExample from './components/DataGrid/GridColumnVisibility'

export function App() {
	return (
		<Box sx={{ margin: 0, padding: 0 }}>
			<h2>Hello</h2>

			<DataGridDemo />

			<FullFeaturedCrudGrid />

			<StylingRowsGrid />

			<VisibleColumnsBasicExample />
		</Box>
	)
}
