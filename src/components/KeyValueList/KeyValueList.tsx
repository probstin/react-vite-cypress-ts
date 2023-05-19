import Grid from '@mui/material/Grid'
import KeyValue from '../KeyValueItem/KeyValueItem'

function KeyValueList({ data }: any) {
  const keys = Object.keys(data)

  return (
    <Grid container spacing={2}>
      {keys
        .filter(
          (k) => !(data[k] instanceof Array) && !(data[k] instanceof Object),
        )
        .map((k, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <KeyValue label={k} value={data[k]} />
          </Grid>
        ))}
    </Grid>
  )
}

export default KeyValueList
