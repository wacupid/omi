webpackJsonp([57],{121:function(n,e){n.exports="## Date Picker\n\n\u65f6\u95f4\u9009\u62e9\u5668\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-date-picker selected-date=\"2019-10-8\"></m-date-picker>\n```\n\n## \u4e0e\u6587\u672c\u6846\u4e00\u8d77\u5de5\u4f5c\n\n```jsx\nimport { define, WeElement, render, h } from 'omi'\nimport 'omim/date-picker'\nimport 'omim/text-field'\nimport 'omim/locate'\n\ndefine('my-app', class extends WeElement {\n  show = true\n\n  date = '2019-10-8'\n\n  onIconClick = () => {\n    this.show = !this.show\n    this.update()\n  }\n\n  onSelect = (evt) => {\n    this.show = false\n    this.date = evt.detail\n    this.update()\n  }\n\n  render() {\n    return <div>\n      <m-text-field rightIcon='today' id='myTextField' value={this.date} label='Date of birth' onIconClick={this.onIconClick} iconEvent={true} />\n      <m-locate to=\"#myTextField\" direction='bottom-left' show={this.show}>\n        <m-date-picker selected-date={this.date} onSelect={this.onSelect}></m-date-picker>\n      </m-locate>\n    </div>\n  }\n})\n\nrender(<my-app />, 'body')\n```\n\n## API\n\n### Props\n\n```jsx\n{\n  selectedDate: string\n}\n```\n\n### Events\n\n* select"}});
//# sourceMappingURL=57.b5630786.chunk.js.map