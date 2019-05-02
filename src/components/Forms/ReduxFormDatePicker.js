import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SingleDatePicker } from 'react-dates'
import { CalendarToday } from '@material-ui/icons'
import { monthsNumber } from 'constants/months'
import Helpers from 'helpers'

const reversedMonths = Helpers.swap(monthsNumber)

export default class ReduxFormDatePicker extends PureComponent {
  static propTypes = {
    input: PropTypes.object,
  }

  static defaultProps = {
    input: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      focused: false,
    }
  }

  handleFocusChange = ({ focused }) => {
    this.setState({ focused })
  }

  render() {
    const { input } = this.props
    const { focused } = this.state

    return (
      <SingleDatePicker
        customInputIcon={
          <CalendarToday />
        }
        date={ input.value }
        id={ input.name }
        onDateChange={ (date) => input.onChange(date) }
        focused={ focused }
        onFocusChange={ this.handleFocusChange }
        showDefaultInputIcon={ false }
        hideKeyboardShortcutsPanel={ true }
        enableOutsideDays={ true }
        isOutsideRange={ () => false }
        orientation={ (window.innerWidth <= 690) ? 'vertical' : 'horizontal' }
        renderMonthText={ (month) => {
          return (
            <strong>
              { reversedMonths[month.month() + 1] }
            </strong>
          )
        } }
      />
    )
  }
}
