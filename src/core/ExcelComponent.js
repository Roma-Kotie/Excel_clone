import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []

    this.prepare()
  }

  // Setting up our component before init
  prepare() {}

  // Returns the component template
  toHTML() {
    return ''
  }

  //Notify listeners about the event event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribe to the event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // Only changes for those fields that we have subscribed to come here
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Initializing the Component
  // Add DOM listeners
  init() {
    this.initDOMListeners()
  }

  // Remove the component
  // Clean up the listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
