import Typography from '@mui/material/Typography'
import KeyValueList from './components/KeyValueList/KeyValueList'
import { Box, Card, CardContent, Grid, Paper, styled } from '@mui/material'
import KeyValue from './components/KeyValueItem/KeyValueItem'

function App() {
  const test: any = {
    firstName: 'test',
    lastName: 'another',
    employeeNo: '1234',
    badgeNo: '789',
    greeting: 'greeting',
    another: 'test',
    addresses: [],
    hello: { test: '' },
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Participant Info
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Identification
              </Typography>
              <KeyValueList data={test} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Identification
              </Typography>
              <KeyValueList data={test} />
            </CardContent>
          </Card>
          <KeyValue label={'Hello'} value={'World'} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
