import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import Button from '../../components/button/button';

const Login = () => {
  return (
    <Layout>
      <div className="loginWrapper">
        <div className="loginContainer container">
          <PageHeader
            title="Авторизация"
            renderButton={() => (
              <Button onClick={() => console.log('q')} color="blue">
                Регайся сук
              </Button>
            )}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
