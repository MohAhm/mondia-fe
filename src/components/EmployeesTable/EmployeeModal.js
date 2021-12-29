import React, { useState, useCallback } from 'react'

import { Modal, Form, Input, Button, TimePicker } from 'antd'

const EMPLOYEE = {
  _id: null,
	name: '',
  joinDate: '',
  teamCode: null,
	skills: [],
}

export default function EmployeeModal({
  employee,
  isNewEmployee=false,
  hasModalOpened,
  setHasModalOpened
}) {
  const [inputs, setInputs] = useState(employee)
  const { name, joinDate, skills } = inputs
  const [ form ] = Form.useForm()

  console.log(joinDate)

  const resetValues = useCallback(
		() => {
			setInputs(employee)
		},
		[setInputs, employee],
	)

  const handleCloseModal = () => {
    setHasModalOpened(false)
    resetValues()

    if (isNewEmployee) {
			form.resetFields()
		}
  }

  const handleChange = useCallback(
		(e) => {
			const { name, value } = e.target
      
			setInputs(prevInputs => ({
				...prevInputs,
				[name]: value
			}))
		},
		[setInputs]
	)

  return (
    <Modal
      title={`Edit Employee`}
      visible={hasModalOpened}
      // onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={handleCloseModal}
    >
      <Form
        // form={form}
        // onFinish={handleLog}
      >
        <Form.Item>
          <Input
            value={name}
            name='name'
            placeholder='Name'
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            value={skills}
            name='skills'
            placeholder='Skills'
            autoSize={{ minRows: 3 }}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            label={isNewEmployee ? 'Add a New Employee' : 'Save'}
            type="submit"
            // disabled={body.trim() === ''}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
