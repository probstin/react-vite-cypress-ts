import Grid from '@mui/material/Grid'
import KeyValue from '../KeyValueItem/KeyValueItem'

function KeyValueList({ data }: any) {
  const keyValues = Object.keys(data).filter(
    (k) => !(data[k] instanceof Array) && !(data[k] instanceof Object),
  )

  return (
    <Grid container spacing={2}>
      {keyValues.map((k, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <KeyValue label={k} value={data[k]} />
        </Grid>
      ))}
    </Grid>
  )
}

export default KeyValueList
