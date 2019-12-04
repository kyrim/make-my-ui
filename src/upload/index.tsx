import * as React from "react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import styled from "styled-components";
import Color from "color";

import { Spinner } from "../spinner";
import { Image } from "../image";

interface Props {
  accept?: string;
  text?: string;
  shouldShowPreview?: boolean;
  isLoading?: boolean;
  onDrop?: (file: File) => void;
  file?: UploadedFile;
  className?: string;
}

export interface UploadedFile {
  name: string;
  url: string;
}

const DropStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: inherit;
  width: inherit;
  border-width: 0.1rem;
  border-radius: ${props => props.theme.borderRadius};
  border-color: ${props => props.theme.colors.complementary};
  background-color: ${props =>
    Color(props.theme.colors.complementary)
      .mix(Color("white"), 0.9)
      .toString()};
  border-style: dashed;
  outline: none;
`;

const ThumbsContainer = styled.aside`
  width: 100%;
`;

const ThumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbStyled = styled.div`
  background-color: ${props =>
    Color(props.theme.colors.complementary)
      .mix(Color("white"), 0.8)
      .toString()};
  overflow: hidden;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border: 0.1rem solid ${props => props.theme.colors.complementary};
  margin: 1rem 1rem 0rem 1rem;
`;

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
`;

const ThumbTitle = styled.div`
  padding: 0.5rem 0.5rem 0rem 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;

const StyledImage = styled(Image)`
  display: block;
  max-width: 200px;
  max-height: 200px;
  width: auto;
`;

const StyledSpinner = styled(Spinner)`
  margin: 0.5rem;
  color: ${props => props.theme.colors.complementary};
`;

const TextStyled = styled.p`
  margin: 0rem;
  padding: 0.5rem;
  color: ${props => props.theme.colors.complementary};
`;

function anyEndsWith(fileName: string, extensions: string[]) {
  return (
    extensions.filter(extension =>
      fileName.toLowerCase().endsWith(extension.toLowerCase())
    ).length > 0
  );
}

const Upload = ({
  accept = "image/*",
  text = "Drag and drop or click here to upload",
  shouldShowPreview = true,
  isLoading = false,
  onDrop = () => {},
  className,
  file
}: Props) => {
  const onDropCallback = useCallback(<T extends File>(acceptedFiles: T[]) => {
    onDrop(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    onDrop: onDropCallback
  });

  return (
    <div className={className}>
      <DropStyled {...getRootProps()}>
        {file && (
          <ThumbsContainer>
            <ThumbContainer>
              {shouldShowPreview && (
                <ThumbStyled key={file.url}>
                  <ThumbInner>
                    <StyledImage
                      alt="Image uploading"
                      src={
                        anyEndsWith(file.name, [
                          ".jpg",
                          ".jpeg",
                          ".png",
                          ".bmp"
                        ])
                          ? file.url
                          : "/static/file.png"
                      }
                    />
                  </ThumbInner>
                </ThumbStyled>
              )}
              <ThumbTitle title={file.name}>{file.name}</ThumbTitle>
            </ThumbContainer>
          </ThumbsContainer>
        )}
        <input {...getInputProps()} />
        {isLoading ? (
          <StyledSpinner />
        ) : (
          text && <TextStyled title={text}>{text}</TextStyled>
        )}
      </DropStyled>
    </div>
  );
};

export { Upload };
