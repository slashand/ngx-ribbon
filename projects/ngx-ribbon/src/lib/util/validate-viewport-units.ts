/**
 * : @param (value: any) - validate the input width if it is a valid viewport entry and returns a boolean property
 */
export function ValidateViewPortUnits(value: any) {
  return (
    (value !== '' && value.endsWith('%')) ||
    value.endsWith('em') ||
    value.endsWith('px') ||
    value.endsWith('rem') ||
    value.endsWith('vw')
  );
}
