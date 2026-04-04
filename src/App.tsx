import { MainLayout } from './layouts/mainLayout';
import { AppRoutes } from './routes/AppRoutes';

const App = () => {
	return (
		<>
            <MainLayout>
                <AppRoutes />
            </MainLayout>
		</>
	);
};

export default App;
