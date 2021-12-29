import React, { useState, useCallback } from 'react'
import Modal from 'antd/es/modal'

export default function DeleteModal({
  dataRow,
  text,
  deleteRow,
  onRefetch,
  hasModalOpened,
  setHasModalOpened
}) {
  const [confirmLoading, setConfirmLoading] = useState(false)
  const { _id: id, name } = dataRow

  const handleCloseModal = () => {
    setHasModalOpened(false)
  }

  const handleOk = useCallback(
    async () => {
      setConfirmLoading(true)
      await deleteRow(id)
      await onRefetch()
      setConfirmLoading(false)
      setHasModalOpened(false)
    },
    [id, deleteRow, onRefetch, setHasModalOpened],
  )

  return (
    <Modal
      title={`Delete ${name}`}
      visible={hasModalOpened}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCloseModal}
    >
      {`${text} ${name}?`}
    </Modal>
  )
}
