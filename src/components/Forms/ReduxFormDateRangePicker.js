import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates'
import { Map } from 'immutable'
import { CalendarToday } from '@material-ui/icons'
import { monthsNumber } from 'constants/months'
import Helpers from 'helpers'

const reversedMonths = Helpers.swap(monthsNumber)

export default class ReduxFormDateRangePicker extends PureComponent {
  static propTypes = {
    input: PropTypes.object,
  }

  static defaultProps = {
    input: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      focusedInput: null,
    }
  }

  handleDateChanges = ({ startDate, endDate }) => {
    const { input } = this.props
    const selectedDate = [
      ['startDate', startDate],
      ['endDate', endDate],
    ]
    input.onChange(Map(selectedDate))
  }

  handleFocusChange = (focusedInput) => {
    this.setState({ focusedInput })
  }

  render() {
    const { input } = this.props
    const { focusedInput } = this.state

    return (
      <DateRangePicker
        customInputIcon={
          <CalendarToday />
        }
        customArrowIcon={
          <span>a</span>
        }
        startDatePlaceholderText='Data Inicial'
        endDatePlaceholderText='Data Final'
        startDate={ input.value ? input.value.get('startDate') : null }
        startDateId='startDate'
        endDate={ input.value ? input.value.get('endDate') : null }
        endDateId='endDate'
        onDatesChange={ this.handleDateChanges }
        focusedInput={ focusedInput }
        onFocusChange={ this.handleFocusChange }
        showClearDates={ false }
        showDefaultInputIcon={ false }
        hideKeyboardShortcutsPanel={ true }
        enableOutsideDays={ true }
        minimumNights={ 0 }
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
