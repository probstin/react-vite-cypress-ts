import Typography from '@mui/material/Typography'

export type KeyValueProps = {
  label: string
  value: any
}

function KeyValue({ label, value }: KeyValueProps) {
  return (
    <>
      <Typography
        id={label}
        variant="overline"
        component="div"
        color="text.secondary"
      >
        {label}
      </Typography>
      <Typography aria-labelledby={label} variant="body1" component="div">
        {value}
      </Typography>
    </>
  )
}

export default KeyValue
