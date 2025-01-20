import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  pin: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007AFF',
  },
  item: {
    fontSize: 25,
    color: '#333',
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
  },
  flatList: {
    flexGrow: 0,
    marginVertical: 15
  },
  button: {
    backgroundColor: '#0070C0',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  logo: {
    width: 300,
    height: 100,
    objectFit: 'contain',  // Ensures the image keeps its original aspect ratio,
  },
  statusBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#0070C0', // Blue color matching the existing styles
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  statusBarTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});