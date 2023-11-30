import jsx from 'rollup-plugin-jsx'
 
export default {
  dest: 'build/index.js',
  entry: 'src/index.js',
  plugins: [
    jsx( {factory: 'React.createElement'} )
  ],
  sourceMap: true
}
 