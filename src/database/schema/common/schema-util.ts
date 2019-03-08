/**
 * Before save opetation
 * @param data
 */
const preSave = (data: any) => {
  if (data.isNew) {
    data.meta.createdAt = data.meta.updatedAt = Date.now()
  } else {
    data.meta.updatedAt = Date.now()
  }
  return data
}

export {
  preSave
}
