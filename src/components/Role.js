
import React from 'react';
import { Button, Collapse } from 'react-bootstrap'

class Role extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
		}
	}

	render = () => {
        const { open } = this.state

		return (
			<div>
                <Button
                    variant='link'
                    size='sm'
                    className='px-0 text-left'
                    onClick={() => this.setState({ open: !open })}
                    aria-controls={this.props.id}
                    aria-expanded={open}
                >
                    {this.props.role.title}
                </Button>
                <Collapse in={this.state.open}>
                    <div id={this.props.id}>
                        {this.props.role.description.map(d => <p>{d}</p>)}
                    </div>
                </Collapse>
            </div>
		)
	}
}

export default Role